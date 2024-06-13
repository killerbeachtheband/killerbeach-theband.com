import { AudioController } from "@/components/audio-controller";

export function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="fixed bottom-16 left-0 w-full px-5">
        <AudioController progress={40} />
      </div>
    </div>
  );
}
