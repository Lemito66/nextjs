"use client";
import { useParams } from "next/navigation";

function UserPageId() {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <button
        onClick={() => {
          console.log("Works");
        }}
      >
        Clic Aqui
      </button>
    </div>
  );
}

export default UserPageId;
