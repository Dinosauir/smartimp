import Link from "next/link";

const UserStats = ({ name, username, followers, following, public_gists, public_repos, email, link }) => {
  return (
    <div className="flex flex-col text-sm">
      <div className="flex flex-row">
        <h4 className="font-bold text-neutral-700 mr-1">Name:</h4>
        <p className="text-indigo-600 font-semibold">{name}</p>
      </div>
      <div className="flex flex-row">
        <h4 className="font-bold text-neutral-700 mr-1">Username:</h4>
        <Link className="text-indigo-600 font-light" href={link} target="_blank">
          @{username}
        </Link>
      </div>
      <div className="flex flex-row">
        <h5 className="font-bold text-neutral-700 mr-1">Followers:</h5>
        <p className="text-indigo-600 font-light mr-2">{followers}</p>

        <h5 className="font-bold text-neutral-700 mr-1">Following:</h5>
        <p className="text-indigo-600 font-light">{following}</p>
      </div>
      <div className="flex flex-row">
        <h5 className="font-bold text-neutral-700 mr-1">Public gists:</h5>
        <p className="text-indigo-600 font-light mr-2">{public_gists}</p>

        <h5 className="font-bold text-neutral-700 mr-1">Public repos:</h5>
        <p className="text-indigo-600 font-light">{public_repos}</p>
      </div>
      <div className="flex flex-row">
        <h4 className="font-bold text-neutral-700 mr-1">E-mail:</h4>
        <Link className="text-indigo-600 font-light" href={`mailto:${email}`}>
          mailto:{email}
        </Link>
      </div>
    </div>
  );
};

export default UserStats;
