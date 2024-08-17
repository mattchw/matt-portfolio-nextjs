import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import type { NextPage } from "next";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { about, resume, projects, contact } from "../data";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [visibleSection, setVisibleSection] = useState<string>();
  const [sectionRefs, setSectionRefs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mattchw"
      )
        .then((res) => res.json())
        .then((data) => {
          const res = data.items;
          const posts = res.filter(
            (item: { categories: string | any[] }) => item.categories.length > 0
          );
          setData(posts);
        });
    };

    fetchData();
  }, []);

  const handleVisibilityChange = useCallback(
    (sectionId: string, isVisible: boolean) => {
      // check if scrolling stops

      if (isVisible) {
        setVisibleSection(sectionId);
      } else if (visibleSection === sectionId) {
        setVisibleSection(undefined);
      }
    },
    [visibleSection]
  );

  const addSectionRef = useCallback(
    (id: string, ref: React.MutableRefObject<any>) => {
      setSectionRefs((prevRefs: any) => {
        // Ensure the ref is not already in the array
        if (!prevRefs.some((r: any) => r.id === id)) {
          return [...prevRefs, { id, ref }];
        }
        return prevRefs;
      });
    },
    []
  );

  const scrollTo = (ele: any) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={`sticky ${visibleSection ? "show" : "hide"}`}>
        {sectionRefs.map((sectionRef: any, index) => (
          <button
            key={index}
            type="button"
            className={`headerLink
            ${visibleSection === sectionRef.id ? "active" : ""}
          `}
            onClick={() => scrollTo(sectionRef.ref.current)}
          >
            {sectionRef.id}
          </button>
        ))}
      </div>
      <ActionIcon
        variant="light"
        color={dark ? "yellow" : "blue"}
        onClick={() => {
          if (dark) {
            localStorage.setItem("theme", "light");
          } else {
            localStorage.setItem("theme", "dark");
          }
          toggleColorScheme();
        }}
        className="themeButton"
      >
        {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
      </ActionIcon>
      <Banner />
      <About
        id="About"
        data={about}
        addSectionRef={addSectionRef}
        onVisibilityChange={handleVisibilityChange}
      />
      <Resume
        id="Resume"
        data={resume}
        addSectionRef={addSectionRef}
        onVisibilityChange={handleVisibilityChange}
      />
      <Project
        id="Project"
        projects={projects}
        addSectionRef={addSectionRef}
        onVisibilityChange={handleVisibilityChange}
      />
      <Blog
        id="Blog"
        posts={data}
        addSectionRef={addSectionRef}
        onVisibilityChange={handleVisibilityChange}
      />
      <Contact
        id="Contact"
        info={contact.info}
        socials={contact.socials}
        addSectionRef={addSectionRef}
        onVisibilityChange={handleVisibilityChange}
      />
      <Footer />
    </>
  );
};

export default Home;
