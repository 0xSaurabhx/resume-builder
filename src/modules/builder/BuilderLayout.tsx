import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBarLayout />
      <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white">
          <header className="w-[210mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
          </header>
          <div className="overflow-auto no-scrollbar">
            <ResumeLayout />
          </div>
        </div>
        <aside className="w-[25vw] min-w-[20rem] print:hidden">
          <EditorLayout />
        </aside>
      </main>
    </div>
  );
};

export default BuilderLayout;
