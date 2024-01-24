import App from "../App";
import React, { useState, useEffect } from "react";
import "./Login.css"; // Import your CSS file
import supabase from "../SupabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = (props) => {
  var [Log, setLog] = useState( JSON.parse(localStorage.getItem("L")) ||false
  );
  var [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userid")) || 0
  );
  const [userProfile2, setUserProfile2] = useState(JSON.parse(localStorage.getItem("userProfile2")) ||
""
  );
  const [userDate, setUserData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [flag, setFlag] = useState(false);

  const insertNewRow = async (table, obj) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .insert([obj])
        .single();

      if (error) {
        console.error("Error inserting row:", error);
        return null;
      }

      if (data) {
        console.log("Row inserted successfully:", data);
        return data.id;
      } else {
        console.error("Error inserting row: Data is null");
        return null;
      }
    } catch (error) {
      console.error("Error inserting row:", error.message);
      return null;
    }
  };

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const { data, error } = await supabase.from("Users1").select();

      if (error) {
        setFetchError("Error in Fetch");
        setUserData(null);
        console.error(error);
      }

      if (data) {
        setUserData(data);
        setFetchError(null);
        console.log("Data fetched successfully:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setFetchError("Error fetching data");
    }
  };

  const cartinsert = () => {
    console.log("userDate length:", userDate.length);
    for (let i = 0; i < userDate.length; i++) {
      console.log("Iterating over userDate:", i);

      if (userDate[i].email === userProfile2.email) {
        console.log("User found with matching email:", userProfile2.email);

        setUserId(userDate[i].id);

        insertNewRow("Cart", {
          uid: userDate[i].id,
          citem: [{ q: 1, itemid: 0 }],
        });

        setFlag(true);

        return;
      } else {
        console.log("User not found with email:", userProfile2.email);
      }
    }
  };

  const choos = () => {
    if (!Log) {
      return (
        <div className="log-Container">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["google"]}
          />
        </div>
      );
    } else {
      return (
        <App
          log={Log}
          setlog={setLog}
          userid={userId}
          setuserid={setUserId}
          userprofile2={userProfile2}
        />
      );
    }
  };

  const getUserData = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user data:", error.message);
        return;
      }

      if (data?.user) {
        setUserProfile2((prevProfile) => ({
          ...prevProfile,
          pimg: data.user.user_metadata.avatar_url,
          name: data.user.user_metadata.name,
          email: data.user.email,
        }));

        console.log(userProfile2.name);

        const id = await insertNewRow("Users1", {
          uname: userProfile2.name,
          img: userProfile2.pimg,
          email: userProfile2.email,
        });

        console.log("User ID:", id);

        cartinsert();

        setLog(true);
        fetchData(); // Trigger fetchData after a successful login
      }
    } catch (error) {
      console.error("Error in getUserData:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = supabase.auth.onAuthStateChange(handleAuthStateChange);
    return () => unsubscribe;
  }, []);

  const handleAuthStateChange = (event) => {
    if (event !== "SIGNED_OUT") {
      console.log("success");
      getUserData();
    } else {
      setLog(false);
      setUserProfile2("")
      console.log("unsuccess");
    }
  };

  useEffect(() => {
    fetchData();
    cartinsert();
  }, [userProfile2]);

  useEffect(() => {

    fetchData();
    cartinsert();
  }, [Log]);

  // useEffect(() => {
  //   handleAuthStateChange()
    // localStorage.setItem("L", JSON.stringify(Log));
  // }, [Log===true]);  

  useEffect(() => {
    localStorage.setItem("L", JSON.stringify(Log));
  }, [Log]);

  useEffect(() => {
    localStorage.setItem("userid", JSON.stringify(userId));
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("userProfile2", JSON.stringify(userProfile2));
  }, [userProfile2]);

  return (
    <div>
      <div>{choos()}</div>
    </div>
  );
};

export default Login;
