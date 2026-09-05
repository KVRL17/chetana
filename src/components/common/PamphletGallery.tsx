import Image, { type StaticImageData } from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import pamphletSchoolInside from "../../../pamplet.jpeg";
import pamphletStudentCover from "../../../pampletone.jpeg";
import pamphletGeneralInside from "../../../pampletschool.jpeg";
import pamphletGeneralCover from "../../../pampletschoolone.jpeg";

type PamphletPanel = {
  image: StaticImageData;
  label: string;
  alt: string;
};

const pamphletSets: Array<{
  title: string;
  description: string;
  panels: PamphletPanel[];
}> = [
  {
    title: "Counselling services",
    description: "An overview of the centre, counsellor, available services and development programmes.",
    panels: [
      { image: pamphletGeneralCover, label: "Services panel", alt: "Chetana counselling services pamphlet with contact and appointment information" },
      { image: pamphletGeneralInside, label: "Centre profile", alt: "Chetana counselling centre profile, mission, philosophy and programmes pamphlet" },
    ],
  },
  {
    title: "Student and school counselling",
    description: "Information for students, parents and institutions about counselling support in educational settings.",
    panels: [
      { image: pamphletStudentCover, label: "Student & parent panel", alt: "Chetana student and parent counselling pamphlet with centre contact details" },
      { image: pamphletSchoolInside, label: "School counselling panel", alt: "School counselling lessons, referrals, development and group support pamphlet" },
    ],
  },
];

export function PamphletGallery() {
  return (
    <section className="section-space bg-[#f0eee8]" id="information-pamphlets">
      <div className="container-shell">
        <div className="max-w-3xl text-left">
          <div className="eyebrow mb-4 sm:mb-5"><FileText className="h-3.5 w-3.5" /> Information pamphlets</div>
          <h2 className="section-title">Centre information, ready to read and share</h2>
          <p className="lead-copy mt-5">Open any panel for a clear full-size view. The original pamphlet artwork and information are preserved.</p>
        </div>

        <div className="mt-9 grid gap-5 sm:mt-11 lg:grid-cols-2">
          {pamphletSets.map((set) => (
            <article key={set.title} className="overflow-hidden rounded-[1.4rem] border border-primary/8 bg-white shadow-[0_18px_55px_rgba(23,63,69,.06)] sm:rounded-[1.8rem]">
              <div className="border-b border-primary/8 p-5 text-left sm:p-6">
                <h3 className="text-lg font-extrabold text-primary sm:text-xl">{set.title}</h3>
                <p className="mt-1.5 text-[13px] leading-5.5 text-muted sm:text-sm sm:leading-6">{set.description}</p>
              </div>
              <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
                {set.panels.map((panel) => (
                  <a
                    key={panel.label}
                    href={panel.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-[1rem] border border-primary/8 bg-surface text-left transition hover:border-primary/18 hover:shadow-lg"
                  >
                    <div className="relative aspect-[1600/1131] overflow-hidden bg-white">
                      <Image src={panel.image} alt={panel.alt} fill placeholder="blur" sizes="(max-width: 640px) calc(100vw - 3.25rem), (max-width: 1024px) 45vw, 270px" className="object-contain transition duration-300 group-hover:scale-[1.015]" />
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-primary/7 px-3.5 py-3 text-[11px] font-extrabold text-primary sm:text-xs">
                      <span>{panel.label}</span>
                      <span className="inline-flex items-center gap-1 text-secondary">Full size <ExternalLink className="h-3.5 w-3.5" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
