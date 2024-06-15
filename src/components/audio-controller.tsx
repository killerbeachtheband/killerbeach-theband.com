import { Progress } from "flowbite-react";
import {
  MdFastForward,
  MdFastRewind,
  MdPlayCircleFilled,
} from "react-icons/md";

type Props = {
  progress: number;
  onClickPrev?: () => void;
  onClickPlay?: () => void;
  onClickNext?: () => void;
};

export function AudioController({
  progress,
  onClickPrev,
  onClickPlay,
  onClickNext,
}: Props) {
  return (
    <div>
      <div className="space-y-8">
        <Progress
          progress={progress}
          size="sm"
          color="white"
          theme={{ color: { white: "bg-neutral-200" } }}
        />
        <div className="flex justify-center space-x-8">
          <button type="button" onClick={onClickPrev}>
            <MdFastRewind size={64} />
          </button>
          <button type="button" onClick={onClickPlay}>
            <MdPlayCircleFilled size={64} />
          </button>
          <button type="button" onClick={onClickNext}>
            <MdFastForward size={64} />
          </button>
        </div>
      </div>
    </div>
  );
}
