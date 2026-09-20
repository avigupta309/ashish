import type { userProps } from "./type";

interface TableProps {
  user: userProps[];
}

export const Table = ({ user }: TableProps) => {
  return (
    <div className="table-container">
      <h1>User</h1>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {user.map((std, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{std.fullName}</td>
                <td>{std.email}</td>
                <td>{std.roll}</td>
                <td>{std.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
