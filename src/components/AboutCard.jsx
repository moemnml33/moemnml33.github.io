import {
  Avatar,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
  IconButton,
} from "@material-tailwind/react";
import moebooka from "../assets/moebooka.JPEG";

export default function AboutCard() {
  const handleGithub = () => {
    window.open("https://www.github.com/moemnml33", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/mohamad-boukaili-9871b5211/",
      "_blank"
    );
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/moebooka33/", "_blank");
  };
  const handleSoundcloud = () => {
    window.open("https://soundcloud.com/moebooka_music", "_blank");
  };
  const handleTwitch = () => {
    window.open("https://www.twitch.tv/moebooka_music", "_blank");
  };
  const handleDiscord = () => {
    window.open("https://discord.com/users/moebooka33/", "_blank");
  };

  return (
    <div
      className="container flex flex-col gap py-2 px-10 max-w-[900px]"
      id="about"
    >
      <Card className="my-8 bg-white dark:bg-zinc-900 shadow-transparent">
        <Avatar src={moebooka} alt="avatar" size="xl" />
        <CardBody className="p-0 pt-6">
          <Typography variant="h2" color="white" className="mb-2">
            Junior web and mobile developer, independent artist.
          </Typography>
          <Typography className="text-slate-500 dark:text-zinc-400">
            I'm Mohamad, a software developer and independent DJ from Montreal,
            and currently a fourth-year computer science student at Concordia
            University. It all started with a simple Hello World...
          </Typography>
        </CardBody>
        <CardFooter className="px-0 pt-4 pb-8">
          <div class="flex gap-4">
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleGithub}
            >
              <span>
                <i class="text-xl fab fa-github" aria-hidden="true"></i>
              </span>
            </button>
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleLinkedin}
            >
              <span>
                <i class="text-xl fab fa-linkedin" aria-hidden="true"></i>
              </span>
            </button>
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleInstagram}
            >
              <span>
                <i class="text-xl fab fa-instagram" aria-hidden="true"></i>
              </span>
            </button>
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleSoundcloud}
            >
              <span>
                <i class="text-xl fab fa-soundcloud" aria-hidden="true"></i>
              </span>
            </button>
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleTwitch}
            >
              <span>
                <i class="text-xl fab fa-twitch" aria-hidden="true"></i>
              </span>
            </button>
            <button
              class="w-8 relative align-center text-xs text-zinc-400 hover:text-zinc-100 duration-300 ease-in-out"
              type="button"
              onClick={handleDiscord}
            >
              <span>
                <i class="text-xl fab fa-discord" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
