import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { MEE } from "../../data/department/MEE";
import "../../styles/departments/MEE.css";

export default function MEEPage() {
  const [baseDept] = useState<typeof MEE>(MEE);
  const [openYear, setOpenYear] = useState<number | null>(null);

  const dept = useMemo(() => mergeDeptWithOverrides(baseDept), [baseDept]);

  useEffect(() => {
    if (!dept) return;

    document.title = `${dept.code} | BULSU COE`;

    const link =
      (document.querySelector("link[rel='icon']") as HTMLLinkElement | null) ??
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement | null);

    if (link) {
      link.href = `/icons/${dept.code.toLowerCase()}.svg`;
    }
  }, [dept]);

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white">
      <Navbar onNav={onNav} />

      <section id="home" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            {dept.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{dept.subtitle}</p>
          <div className="mt-5">
            <Link
              to={`/dept/${dept.code}/admin`}
              className="inline-flex items-center rounded-full border border-[#a90000] px-5 py-2 text-sm font-semibold text-[#a90000] hover:bg-[#a90000] hover:text-white"
            >
              Open Department Admin
            </Link>
          </div>
        </div>

<div className="mt-8 grid grid-cols-12 gap-5">

  {/* LEFT BIG */}
  <a 
    href="https://www.facebook.com/photo?fbid=3604494319879176&set=a.750132340243852"
    target="_blank"
    rel="noopener noreferrer"
    className="block col-span-12 md:col-span-4"
  >
    <div className="group h-[380px] md:h-[670px] rounded-2xl overflow-hidden bg-gray-200 
                    transition-all duration-500 ease-out 
                    hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

      <div className="w-full h-full relative overflow-hidden">
        <img
          src={dept.images.heroLeft}
          alt=""
          className="w-full h-full object-cover 
                     transition-transform duration-700 ease-out 
                     group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 
                        opacity-0 group-hover:opacity-100 
                        transition duration-500"></div>
      </div>
    </div>
  </a>


  <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-5">
    
    {/* TOP BIG */}
    <a 
      href="https://www.facebook.com/photo/?fbid=1263589322231482&set=a.750132360243850"
      target="_blank"
      rel="noopener noreferrer"
      className="block col-span-12"
    >
      <div className="group h-[300px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
        
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={dept.images.heroBig}
            alt=""
            className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
        </div>
      </div>
    </a>


    {/* SMALL 1 */}
    <a 
      href="https://www.facebook.com/AIMEESBulSU/posts/pfbid0QBMLNdvqEusEnLRtnMp6d5jxH2NGUHKFcPr7BGNu2ii6W3wUGATKcNa4po2ScTZQl?rdid=HBuJMuAqSMrBdxxk#"
      target="_blank"
      rel="noopener noreferrer"
      className="block col-span-12 md:col-span-6"
    >
      <div className="group h-[350px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
        
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={dept.images.heroSmall1}
            alt=""
            className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
        </div>
      </div>
    </a>


    {/* SMALL 2 */}
    <a 
      href="https://www.facebook.com/AIMEESBulSU/posts/pfbid02ijHers3CGTgvyKqmZkGb1X7XDtdX6uhnTX3J8hCWgEYbuXzUhY2eGnktoXpjJUaHl?rdid=MeGMAnY0orEaeqMi#"
      target="_blank"
      rel="noopener noreferrer"
      className="block col-span-12 md:col-span-6"
    >
      <div className="group h-[350px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
        
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={dept.images.heroSmall2}
            alt=""
            className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
        </div>
      </div>
    </a>

  </div>
</div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-justify">
          <div className="text-sm font-semibold text-gray-900">
            {dept.programOverview.heading}
          </div>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-3xl">
            {dept.programOverview.text}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Stat
            value={dept.programOverview.stats.nonTeaching}
            label="Non-Teaching Personnel"
            accentHex={dept.theme.accentHex}
          />
          <Stat
            value={dept.programOverview.stats.faculty}
            label="Faculty"
            accentHex={dept.theme.accentHex}
          />
          <Stat
            value={dept.programOverview.stats.students}
            label="Enrolled Students"
            accentHex={dept.theme.accentHex}
          />
        </div>
      </section>

      <section id="peo" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.peo.title}
          subtitle={dept.peo.subtitle}
        />

        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={dept.images.peo}
                alt=""
                className="w-full h-[320px] md:h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="space-y-5">
              {dept.peo.bullets.map((b, idx) => (
                <Bullet key={idx} title={`PEO ${idx + 1}`} text={b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="so" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.so.title}
          subtitle={dept.so.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o, idx) => (
            <OutcomeCard key={idx} title={o.title} text={o.text} />
          ))}
        </div>
      </section>

      <section id="curriculum" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs font-semibold text-gray-400 tracking-wide">
              TAKE A TOUR
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              {dept.curriculum.title}
            </h2>

            {"subtitle" in dept.curriculum && dept.curriculum.subtitle && (
              <p className="mt-2 text-sm font-medium text-gray-700">
                {dept.curriculum.subtitle}
              </p>
            )}

            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {dept.curriculum.text}
            </p>

            {"structure" in dept.curriculum && dept.curriculum.structure && (
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {dept.curriculum.structure}
              </p>
            )}

            <div className="mt-4 space-y-3">
              {dept.curriculum.years.map((year, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenYear(openYear === idx ? null : idx)
                    }
                    className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">
                      {year.title}
                    </span>
                    <span className="text-gray-500">
                      {openYear === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openYear === idx && (
                    <div className="px-4 pb-4 pt-1">
                      <p className="text-sm text-gray-600 mt-1">
                        {year.description}
                      </p>

                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {year.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                              style={{
                                backgroundColor: dept.theme.accentHex,
                              }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="h-[360px] md:h-[420px] flex items-center justify-center rounded-2xl">
              <img
                src={dept.images.watermark}
                alt=""
                className="h-full w-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="laboratories" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.laboratories.title}
          subtitle="Department laboratories and learning spaces"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.laboratories.items.map((lab, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-6">
              <div className="text-xs font-semibold text-gray-400">
                LAB {idx + 1}
              </div>
              <h3 className="mt-2 text-base font-bold text-gray-900">{lab}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="faculty" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dept.faculty.members.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="rounded-2xl border bg-white p-6"
            >
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.careers.title}
          subtitle={dept.careers.subtitle}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.careers.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white p-6 text-center"
            >
              <div className="text-3xl" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="rounded-2xl border bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Department Contact
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Add contact details for {dept.title} in this section.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({
  value,
  label,
  accentHex,
}: {
  value: number;
  label: string;
  accentHex: string;
}) {
  return (
    <div>
      <div className="text-3xl font-extrabold" style={{ color: accentHex }}>
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold text-gray-500">{label}</div>
    </div>
  );
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{text}</div>
    </div>
  );
}

function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="mt-4 font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-500">{text}</div>
    </div>
  );
}