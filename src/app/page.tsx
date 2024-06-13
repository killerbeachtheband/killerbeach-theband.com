import { Player } from "@/components/player";
import { Menu } from "@/components/menu";
import { News } from "@/components/news";
import { ContentSwitcher } from "@/components/content-switcher";
import { MainVisual } from "@/components/main-visual";
import { Tour } from "@/components/tour";
import { Music } from "@/components/music";
import { About } from "@/components/about";

export default function HomePage() {
  return (
    <main>
      <MainVisual />

      <div className="relative pb-20 pt-5">
        <div className="absolute left-0 top-0 -z-10 h-48 w-full bg-gradient-to-b from-primary/50 to-neutral-950"></div>
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
