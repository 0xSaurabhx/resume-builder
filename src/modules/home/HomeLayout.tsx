import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-14 w-full bg-resume-800 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">CV-Blocks</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="https://webdeus.in" passHref={true}>
              <StyledButton variant="text" className="max-md:hidden">
                Home
              </StyledButton>
            </Link>
            <Link href="#about-us" passHref={true}>
              <StyledButton variant="text">About us</StyledButton>
            </Link>
            <a
              href={'https://github.com/html-css-js-art/resume-builder'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </nav>
      <div
        className="pb-10 "
        style={{
          background: 'linear-gradient(to right, rgb(165, 180, 252), rgb(192, 132, 252))',
          fontFamily: "'Poppins', sans-sans-serif",
          fontWeight: 600,
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume.webp"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3
                className="text-xl md:text-2xl mb-2 text-resume-800"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                SIMPLEST WAY TO BUILD A
              </h3>
              <h1
                className="text-5xl mb-12 text-resume-50"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Professional Resume
              </h1>

              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                <p
                  className="text-lg ml-3 text-resume-800"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Image
                    src="https://s6.imgcdn.dev/v2A9o.png"
                    width={200}
                    height={50}
                    alt="Powered By ICP"
                  />
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button variant="contained" className="bg-resume-800 mb-2">
                  BUILD YOUR RESUME
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2
          className="text-resume-800 text-3xl mb-2 text-center lg:text-left"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          CREW MEMBERS
        </h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A team of developers and designers - who love to build open source projects!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
