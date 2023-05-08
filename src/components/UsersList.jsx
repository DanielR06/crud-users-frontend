export const UsersList = ({
  userList,
  setForm,
  selectUsers,
  getUsers,
  getWarning,
}) => {
  return (
    <div className="listproduct">
      <div className="sumary">
        <h1 className="titulo">Crud Users</h1>
        <p>
          <strong>Users: </strong>
          {userList.length}
        </p>
        <button onClick={() => setForm(true)}>Add New user!</button>
      </div>
      <div className="card_container">
        {userList.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.first_name} {user.last_name}</h2>
            <div className="info__product">
              <p>
                <strong>Email: </strong>
                <br />
                {user.email}
              </p>
              <br />
              <p>
                <strong>Birthday: </strong>
                <br />
                {user.birthday}
              </p>
            </div>
            <div className="icons">
              <div onClick={() => selectUsers(user)}>
                <i className="bx bxs-edit-alt bx-sm"></i>
              </div>
              <div onClick={() => getWarning(user)}>
                <i className="bx bxs-trash bx-sm"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
