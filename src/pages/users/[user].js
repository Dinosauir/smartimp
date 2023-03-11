import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "@/components/user";
import { useSearch } from "@/contexts/search";
import GistList from "@/components/gist-list";

export async function getServerSideProps(context) {
  return {
    props: {
      user: context.params.user,
    },
  };
}

const UserPage = ({ user }) => {
  const { setSearchInput } = useSearch();
  const [userData, setUserData] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(() => {
    setSearchInput(user);

    axios
      .get("/api/users/" + user)
      .then((response) => setUserData(response.data.data))
      .catch((e) => console.log(e));
    axios
      .get("/api/users/" + user + "/gists")
      .then((response) => setGists(response.data.data.filter((gist) => gist.public === true)))
      .catch((e) => console.log(e));
  }, [user, setSearchInput]);

  return (
    <>
      <Head>
        <title>{user}</title>
      </Head>
      {userData && (
        <User
          avatar_url={userData.avatar_url}
          name={userData.name}
          login={userData.login}
          html_url={userData.html_url}
          followers={userData.followers}
          following={userData.following}
          public_gists={userData.publicGists}
          public_repos={userData.publicRepos}
          email={userData.email}
        />
      )}
      {gists.length > 0 && <GistList gists={gists} />}
    </>
  );
};

export default UserPage;
