import type { IconName } from "@/components/Icons";

export type InspectionSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type InspectionTopic = {
  slug: string;
  title: string;
  icon: IconName;
  image: string;
  alt: string;
  intro: string;
  sections: InspectionSection[];
  equipmentTitle?: string;
  equipmentLede?: string;
  equipment?: { title: string; image: string }[];
};

export const inspectionTopics: InspectionTopic[] = [
  {
    slug: "lifting",
    title: "Lifting equipment examinations",
    icon: "forklift",
    image: "/images/lifting-exam.jpg",
    alt: "A surveyor checking a crane hook and chain",
    intro:
      "A thorough examination is the record that says a crane, hoist, or lifting accessory is still fit to lift its stated load. How often that visit is due depends on the type of gear and how it is used. Most items are looked at within twelve months, and many accessories within six.",
    sections: [
      {
        title: "What the examination covers",
        paragraphs: [
          "Lifting rules from several older regimes sit together in one visit: the machine, the accessories, and the way the lift is set up. If you already keep test records, the surveyor works from those and from the gear in front of them.",
          "The same equipment can also fall under the rules for work equipment in general. The report says which scope was used, so the file is clear about what was checked.",
        ],
      },
      {
        title: "What the visit is for",
        paragraphs: [
          "The point is the people who operate the gear and the people who stand near it. A lift that is the wrong tool, poorly kept, or past its mark is written down before it becomes an incident.",
        ],
      },
      {
        title: "What the equipment must still do",
        items: [
          "Be strong enough, and the right design, for the load it is marked to lift.",
          "Be installed so a falling object or a moving part is not left in someone’s path.",
          "Be examined on a set interval by someone trained for that class of gear.",
          "Carry a clear mark of its safe working load and any limit the operator needs.",
        ],
      },
      {
        title: "How often",
        paragraphs: [
          "Accessories are commonly due every six months. Other lifting equipment is commonly due every twelve months, unless the use or the maker’s instruction shortens that. The client should be able to show that the examinations are actually being done.",
        ],
      },
    ],
    equipmentTitle: "Gear we examine under this scope",
    equipmentLede: "Lifting machines and the accessories that hang from them, including:",
    equipment: [
      { title: "Tower lights", image: "/images/gear/tower-light.gif" },
      { title: "Rough terrain cranes", image: "/images/gear/rough-crane.gif" },
      { title: "Hoists", image: "/images/gear/hoist.gif" },
      { title: "Elevators", image: "/images/gear/elevator-car.gif" },
      { title: "Ratchet straps", image: "/images/gear/ratchet.gif" },
      { title: "Rebar bending machines", image: "/images/gear/rebar-bend.gif" },
      { title: "Rebar cutting machines", image: "/images/gear/rebar-cut.gif" },
      { title: "Sandblasting pots", image: "/images/gear/blaster.gif" },
      { title: "Skid loaders", image: "/images/gear/skid.gif" },
      { title: "Spreader bars", image: "/images/gear/spreader.gif" },
      { title: "Suspended platforms", image: "/images/gear/cradle.gif" },
      { title: "Table saws", image: "/images/gear/table-saw.gif" },
      { title: "Telescopic forklifts", image: "/images/gear/telehandler.gif" },
      { title: "Tandem rollers", image: "/images/gear/roller.gif" },
      { title: "Tower cranes", image: "/images/gear/tower-crane.gif" },
      { title: "Tower scaffolds", image: "/images/gear/tower-scaffold.gif" },
      { title: "Trenchers", image: "/images/gear/trencher.gif" },
      { title: "Webbing slings", image: "/images/gear/webbing.gif" },
      { title: "Truck-mounted platforms", image: "/images/gear/truck-platform.gif" },
      { title: "Monorail hoists", image: "/images/gear/monorail.gif" },
      { title: "Walk-behind rollers", image: "/images/gear/walk-roller.gif" },
      { title: "Water tankers", image: "/images/gear/tanker.gif" },
      { title: "Welding machines", image: "/images/gear/welder.gif" },
      { title: "Wire rope slings", image: "/images/gear/wire-sling.gif" },
      { title: "Wheel loaders", image: "/images/gear/wheel-loader.gif" },
    ],
  },
  {
    slug: "scaffolding",
    title: "Scaffolding inspections",
    icon: "scaffold",
    image: "/images/scaffolding.jpg",
    alt: "A worker on a scaffold beside a building",
    intro:
      "Scaffolds are temporary platforms. A fall from one is a serious injury. Gulf Technical Inspection looks at tube, fitting, and system scaffolds on construction and industrial sites in Saudi Arabia before people are sent up them.",
    sections: [
      {
        title: "Why the inspection matters",
        paragraphs: [
          "Ties, boards, guardrails, and the ground under the standards decide whether the platform is still a place to work. The visit is written against the rule the site has named, including local requirements and, where the client asks, the OSHA pattern used as a reference.",
        ],
      },
      {
        title: "What you gain",
        items: [
          "People are kept off a platform that has lost a tie, a board, or a guardrail.",
          "A sound scaffold stays in use, so the job is not stopped by a surprise.",
          "A clear report is something a client or an authority can read.",
        ],
      },
      {
        title: "How the visit is arranged",
        items: [
          "The scope is agreed for the scaffold that is actually standing, not a generic list.",
          "The surveyor walks the structure and photographs what matters.",
          "You receive a report with the findings and the next action.",
        ],
      },
    ],
    equipmentTitle: "Scaffolds we look at",
    equipmentLede: "The common types on a Saudi site:",
    equipment: [
      { title: "Site scaffold", image: "/images/gear/site-scaffold.gif" },
      { title: "Tower scaffold", image: "/images/gear/tower-scaffold.gif" },
      { title: "Suspended platform", image: "/images/gear/cradle.gif" },
    ],
  },
  {
    slug: "height-safety",
    title: "Height safety testing",
    icon: "harness",
    image: "/images/height-safety.jpg",
    alt: "A technician clipping a harness line to a roof anchor",
    intro:
      "A harness, a line, or an anchor is the last thing between a person and a fall. If it is unmarked, damaged, or past its inspection, it should not be in use. We inspect and, where the specification asks, test fall-arrest equipment.",
    sections: [
      {
        title: "Fall protection systems",
        paragraphs: [
          "Guardrails, nets, and personal fall-arrest systems are checked as a set. The visit looks for wear from weather and from daily use, and for parts that no longer lock or hold.",
        ],
        items: [
          "The equipment still meets the standard named in the scope.",
          "Harnesses, lines, anchors, and connectors are intact.",
          "Small defects are caught before the item has to be scrapped.",
          "The person on the line can trust that it will work.",
        ],
      },
      {
        title: "How a system is checked",
        items: [
          "A visual pass for obvious damage, corrosion, and missing labels.",
          "A function check: the line pays out, the lanyard holds, the connector closes.",
          "A record of what was seen, what was repaired, and what was removed.",
        ],
      },
      {
        title: "Harnesses and lanyards",
        paragraphs: [
          "The user looks at the harness before each wear. On top of that, a periodic inspection checks damage, distortion, fading, labels, and whether an impact indicator or energy absorber has fired. A fired absorber is taken out of service.",
        ],
      },
      {
        title: "Self-retracting lifelines",
        paragraphs: [
          "These are commonly due once a year. The check covers the housing, the lock, the labels, and whether the energy absorber has been activated. An activated unit is removed and destroyed, not put back on the line.",
        ],
      },
    ],
    equipmentTitle: "What gets checked",
    equipment: [
      { title: "Harness and anchor", image: "/images/gear/harness.gif" },
      { title: "Webbing sling", image: "/images/gear/webbing.gif" },
      { title: "Wire rope", image: "/images/gear/wire-sling.gif" },
    ],
  },
  {
    slug: "elevators",
    title: "Elevator and escalator inspection",
    icon: "elevator",
    image: "/images/elevator.jpg",
    alt: "An inspector at an open elevator",
    intro:
      "Lifts and escalators move people through the buildings going up across Saudi Arabia. The inspection is there so the ride stays safe and the machine is not left to fail in service.",
    sections: [
      {
        title: "What the visit is for",
        items: [
          "Confirm the installation still meets the safety code named for that building.",
          "Find wear before it becomes a breakdown.",
          "Leave a record the owner can show.",
          "Check that the ride is smooth and the safety devices still act.",
        ],
      },
      {
        title: "How it is done",
        items: [
          "A visual look at doors, controls, ropes or belts, and the machine.",
          "A run of the car or the steps, listening for jolts and irregular motion.",
          "A check that brakes, alarms, and sensors still do their job.",
          "A written note of findings, repairs, and what is due next.",
        ],
      },
    ],
    equipmentTitle: "Machines on this visit",
    equipment: [
      { title: "Passenger lift", image: "/images/gear/elevator-car.gif" },
      { title: "Escalator", image: "/images/gear/escalator.gif" },
    ],
  },
  {
    slug: "pressure-vessels",
    title: "Pressure vessel inspections",
    icon: "vessel",
    image: "/images/pressure-vessel.jpg",
    alt: "A surveyor checking a fitting on a pressure vessel",
    intro:
      "A vessel that holds pressure is a critical item in a plant. The inspection looks at whether the shell, the fittings, and the relief devices are still fit for the pressure they are allowed to hold.",
    sections: [
      {
        title: "Why clients ask us",
        items: [
          "Surveyors who know vessel work and the Saudi requirements that apply, including SASO where the specification names it.",
          "A scope written for the vessel in front of them, not a generic checklist.",
          "Safety of the people who work beside the vessel comes first.",
          "A report with photographs, so the file can be shown later.",
        ],
      },
      {
        title: "What the visit includes",
        items: [
          "A visual assessment for wear, corrosion, and obvious defects.",
          "Thickness readings where the specification asks for them.",
          "A surface check for cracks on ferrous parts.",
          "A function check of safety valves.",
          "Help gathering the papers the authority expects.",
        ],
      },
      {
        title: "Why it is repeated",
        paragraphs: [
          "A vessel failure is not a small repair. Regular examinations catch thinning and leaking fittings early, and they keep the vessel in service for the life it was built for.",
        ],
      },
    ],
    equipmentTitle: "Vessels we examine",
    equipment: [
      { title: "Horizontal vessel", image: "/images/gear/vessel-horizontal.gif" },
      { title: "Vertical vessel", image: "/images/gear/vessel-tall.gif" },
    ],
  },
  {
    slug: "containers",
    title: "Shipping container inspections",
    icon: "container",
    image: "/images/container.jpg",
    alt: "A surveyor at the open door of a shipping container",
    intro:
      "A container spends its life in weather, on ships, and under rough handling. Before it goes back into service, someone has to say the structure, the doors, and the floor are still fit to carry cargo.",
    sections: [
      {
        title: "Why the check matters",
        paragraphs: [
          "A damaged corner, a holed floor, or a door that will not seal can lose the cargo or injure the people who handle the box. The inspection is the record that the container is still seaworthy and suitable for the load.",
        ],
      },
      {
        title: "What we look at",
        items: [
          "Structure, corner castings, and rails.",
          "Doors, locks, and seals.",
          "Floor condition and cleanliness where the cargo requires it.",
          "A report a shipping line, a customs desk, or an insurer can read.",
        ],
      },
      {
        title: "What the client gets",
        items: [
          "A box that is fit to move, with the defects named if it is not.",
          "Fewer surprise repairs after the container has already been booked.",
          "A container that can be reused instead of scrapped for a fault nobody wrote down.",
        ],
      },
    ],
    equipmentTitle: "The box we check",
    equipment: [{ title: "Container doors and frame", image: "/images/gear/container-door.gif" }],
  },
];

export function findInspectionTopic(slug: string) {
  return inspectionTopics.find((topic) => topic.slug === slug);
}
