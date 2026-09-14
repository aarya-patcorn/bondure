import VideoExperience from "@/components/VideoExperience/VideoExperience";

// Replace the `src` values below with your four final landscape video URLs.
const experienceVideos = [
  { title: "Heat Room", src: "/experience-center/red.mp4" },
  { title: "Water Submerge Room", src: "/experience-center/blue.mp4" },
  { title: "Hammer Room", src: "/experience-center/yellow.mp4" },
  { title: "Quake Room", src: "/experience-center/green.mp4" },
];

export default function ExperiencePage() {
  return <VideoExperience videos={experienceVideos} />;
}
