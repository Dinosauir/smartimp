import Image from "next/image";

const UserAvatar = ({ avatar }) => {
  return (
    <div className="relative w-24 my-auto">
      <Image
        className="rounded-full border border-gray-100 shadow-sm"
        src={avatar}
        alt="user image"
        width={384}
        height={384}
      />
    </div>
  );
};

export default UserAvatar;
