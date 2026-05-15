import React from "react";

function RecentActivity() {

  // Recent hotel activities
  const activities = [
    "Guest checked into Room 201",
    "Room 105 marked as Clean",
    "New booking created for Room 301",
    "Staff member added",
    "Guest checked out from Room 102",
  ];

  return (

    <div
      className="
      bg-[#FDF6EC]
      p-6
      rounded-2xl
      shadow-lg
      border
      border-[#C4A484]
      mt-10
      "
    >

      {/* Section Title */}
      <h2
        className="
        text-3xl
        font-bold
        text-[#5C2E2E]
        mb-6
        "
      >
        Recent Activity
      </h2>

      {/* Activity List */}
      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}

            className="
            flex
            items-center
            gap-4
            border-b
            border-[#D7B899]
            pb-3
            "
          >

            {/* Burgundy Activity Indicator */}
            <div
              className="
              w-3
              h-3
              rounded-full
              bg-[#8B0000]
              "
            ></div>

            {/* Activity Text */}
            <p
              className="
              text-[#5C4033]
              text-lg
              "
            >
              {activity}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;