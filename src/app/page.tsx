import { About } from "@/components/about";
import { ContentSwitcher } from "@/components/content-switcher";
import { MainVisual } from "@/components/main-visual";
import { Menu } from "@/components/menu";
import { Music } from "@/components/music";
import { News } from "@/components/news";
import { Player } from "@/components/player";
import { Tour } from "@/components/tour";

export default function HomePage() {
  return (
    <main>
      <MainVisual />

      <div className="relative pb-20 pt-5">
        <div className="absolute left-0 top-0 -z-10 h-24 w-full bg-gradient-to-b from-primary/50 to-neutral-950"></div>
        <Menu />
      </div>

      <Player>
        <ContentSwitcher
          contents={{
            1: <Tour />,
            2: <Music />,
            3: <News />,
            4: <About />,
          }}
        />
      </Player>
    </main>
  );
}
