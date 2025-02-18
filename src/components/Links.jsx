export default function Links() {
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
    <div className="flex gap-4">
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleGithub}
      >
        <span>
          <i className="text-xl fab fa-github" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleLinkedin}
      >
        <span>
          <i className="text-xl fab fa-linkedin" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleInstagram}
      >
        <span>
          <i className="text-xl fab fa-instagram" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleSoundcloud}
      >
        <span>
          <i className="text-xl fab fa-soundcloud" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleTwitch}
      >
        <span>
          <i className="text-xl fab fa-twitch" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="w-8 relative align-center text-xs text-zinc-400 hover:text-cyan-400 duration-300 ease-in-out"
        type="button"
        onClick={handleDiscord}
      >
        <span>
          <i className="text-xl fab fa-discord" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}
