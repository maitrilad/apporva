import { useState } from "react";

export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Creating team:", teamName);

    
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Create a New Team</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button type="submit" style={{ padding: "8px 16px" }}>
          Create
        </button>
      </form>
    </div>
  );
}