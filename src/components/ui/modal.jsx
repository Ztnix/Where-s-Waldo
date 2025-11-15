import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();
  //   const [msg, setMsg] = useState(null);
  const [form, setForm] = useState({
    username: "",
  });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    // setMsg(null);

    // try {
    //   const res = await fetch("http://localhost:3000/signUp", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });

    //   const body = await res.json();

    //   if (!res.ok) {
    //     setMsg(body.errors || "Signup failed");
    //     return;
    //   }

    //   navigate(body.redirect || "/home");
    // } catch (err) {
    //   console.log(err);
    //   setMsg("Network error");
    // }
    navigate("/");
  }

  return (
    <div className="bg-[#ffffff] text-black font-bold flex flex-col justify-center items-center gap-4 p-4 rounded-lg min-w-[200px]">
      <h1 className="text-2xl">¡You win!</h1>
      <p className="text-2xl">You finished in 10s!</p>
      <p>Submit your score to the leaderboard:</p>
      <form
        onSubmit={onSubmit}
        className="w-full space-y-4 bg-[#434343] text-white p-8 rounded-xl"
      >
        <div className="flex flex-col gap-2">
          <label className="block text-center">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={onChange}
            className="border px-2 py-1 w-full text-[#797979]"
          />
        </div>

        <button
          type="submit"
          className="bg-linear-to-t from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 transition-colors duration-200 text-white px-4 py-2 rounded w-full mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
