import Image from 'next/image';

const persons = [
  {
    name: 'Saurabh',
    role: 'Backend developer',
    avatar: 'https://gravatar.com/avatar/a886fc62a4f9ccd5697524994a4d2c04?s=400&d=robohash&r=x',
    linkedin: 'https://www.linkedin.com/in/dev-saurabhm/',
  },
  {
    name: 'Satwik Kumar',
    role: 'Frontend developer',
    avatar: 'https://gravatar.com/avatar/75f6ea41208d89d0ac6df361d33c8cb3?s=400&d=robohash&r=x',
    linkedin: 'https://www.linkedin.com/in/sat26',
  },
  {
    name: 'Rohan',
    role: 'Product designer',
    avatar: 'https://gravatar.com/avatar/1c8e56e7c39e617560d685cc7211c777?s=400&d=robohash&r=x',
    linkedin: 'https://www.linkedin.com/in/rohan-dass',
  },
  {
    name: 'Varun Kumar',
    role: 'Frontend developer',
    avatar: 'https://gravatar.com/avatar/e77ab29c358be064f3c180bc7bff3f28?s=400&d=robohash&r=x',
    linkedin: 'https://www.linkedin.com/in/siva-kannan3/',
  },
  {
    name: 'Vignesh Prabhu',
    role: 'Web Designer',
    avatar: 'https://gravatar.com/avatar/667cc7410d0ba0c58036469b2133517d?s=400&d=robohash&r=x',
    linkedin: 'https://www.linkedin.com/in/siva-kannan3/',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({ linkedin }: { linkedin: string }) => (
  <div className="flex gap-4">
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height="96"
            width="96"
          />
          <p className="text-resume-800 mt-4 font-bold">{person.name}</p>
          <p className="text-resume-400 mb-6">{person.role}</p>
          <ProfileSocial linkedin={person.linkedin} />
        </PersonCard>
      ))}
    </>
  );
}
