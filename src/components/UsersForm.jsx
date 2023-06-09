import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const UsersForm = ({
  setForm,
  getUsers,
  userSelected,
  setUserSelected,
}) => {
  const { handleSubmit, register, reset } = useForm();
  const inputNull = { email: "", password: "", first_name: "", last_name: "",
                      birthday: "", image_url: "" };

  const submit = (data) => {
    console.log(data)
    if (userSelected) {
      axios
        .put(
          `https://users-crud-3dyi.onrender.com/users/${userSelected.id}/`,
          data
        )
        .then(() => {
          getUsers();
          closeForm();
        });
    } else {
      axios
        .post(`https://users-crud-3dyi.onrender.com/users/`, data)
        .then(() => {
          getUsers();
          closeForm();
        });
    }
  };
  const closeForm = () => {
    setForm(false);
    setUserSelected(null);
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(inputNull);
    }
  }, [userSelected]);

  return (
    <div className="container__warning">
      <div className="form">
        <button className="btn_close" onClick={() => closeForm()}>
          X
        </button>
        <h3>Users</h3>
        <form onSubmit={handleSubmit(submit)}>
          <p>
            User:
          </p>
          <input type="text" placeholder="first name" id="first_name" {...register("first_name")} />
          <input type="text" placeholder="last name" id="last_name" {...register("last_name")} />
            <input type="email" placeholder="email" id="email" {...register("email")} />
          <input type="text" placeholder="password" id="password" {...register("password")} />
          <input type="text" placeholder="birthday example:06-28" id="birth" {...register("birthday")} />
          <button className="btn__cru" type="submit">
            {userSelected ? "Actualizar" : "Crear"} User
          </button>
        </form>
      </div>
    </div>
  );
};
