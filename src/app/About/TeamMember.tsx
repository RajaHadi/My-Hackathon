import React from "react";
import Image from "next/image";
import Chef from "../../../public/AboutUsImages/chef.jpg"

const TeamMember = () => {
  const members = [
    {
      name: "Mark Henry",
      role: "Chef",
      image: {Chef}, // Replace with your image path
    },
    {
      name: "Lucky Hellen",
      role: "Chef",
      image: {Chef}, // Replace with your image path
    },
    {
      name: "Moon Henry",
      role: "Cooker",
      image: {Chef}, // Replace with your image path
    },
    {
      name: "Tom Morrow",
      role: "Specialist",
      image: {Chef}, // Replace with your image path
    },
  ];

  return (
    <section className="bg-[#FF9F0D] py-12">
      <div className="text-center mb-8">
        <h2 className="text-[48px] font-bold text-white">Team Member</h2>
        <p className="text-white text-[16px] font-normal mt-2">
          Our professional team is here to provide the best service for you.
        </p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 w-56 text-center"
          >
            {/* Dynamic Image Path for Each Member */}
            <Image
              src={Chef}
              alt={member.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;