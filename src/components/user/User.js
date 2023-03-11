import UserAvatar from "./partials/UserAvatar";
import UserSection from "./partials/UserSection";
import UserStats from "./partials/UserStats";

const User = ({ avatar_url, name, login, html_url, followers, following, public_gists, public_repos, email, bio }) => {
  return (
    <div className="flex flex-col">
      <UserSection />
      <div className="mt-6 flex flex-col md:flex-row gap-6 lg:gap-12 justify-center items-center md:items-start border-y-2 border-zinc-100 py-10">
        <UserAvatar avatar={avatar_url} />
        <UserStats
          name={name}
          username={login}
          link={html_url}
          followers={followers}
          following={following}
          public_gists={public_gists}
          public_repos={public_repos}
          email={email}
        />
        <p className="max-w-sm text-center text-sm md:text-left">{bio}</p>
      </div>
    </div>
  );
};

export default User;
