import "../styles.css";

export type userCardProps = {
  userName: string;
  userAvatar: any | undefined;
};

const UserCard = ({ userName, userAvatar }: userCardProps) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-body">
            <img className="avatar" src={userAvatar} alt="" />
            <p>{userName.charAt(0).toUpperCase() + userName.slice(1)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
