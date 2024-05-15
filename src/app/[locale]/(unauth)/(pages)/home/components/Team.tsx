import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface SociaNetworkslProps {
  socialNetworkName: string;
  url: string;
}
interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'Soaib',
    position: 'Product Manager',
    socialNetworks: [
      { socialNetworkName: 'Linkedin', url: 'http://linkedin.com' },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'Mohith Kumar',
    position: 'Tech Lead',
    socialNetworks: [
      { socialNetworkName: 'Linkedin', url: 'http://linkedin.com' },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'Soaib',
    position: 'Product Manager',
    socialNetworks: [
      { socialNetworkName: 'Linkedin', url: 'http://linkedin.com' },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'Mohith Kumar',
    position: 'Tech Lead',
    socialNetworks: [
      { socialNetworkName: 'Linkedin', url: 'http://linkedin.com' },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <LinkedinIcon size="20" />;

      case 'Facebook':
        return <LinkedinIcon size="20" />;

      case 'Instagram':
        return <LinkedinIcon size="20" />;

      default:
        return <LinkedinIcon size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Our Dedicated{' '}
        </span>
        Crew
      </h2>

      <p className="mb-10 mt-4 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid gap-8 gap-y-10 pt-10 md:grid-cols-2 lg:grid-cols-4">
        {teamList.map(({ imageUrl, name, position, socialNetworks }) => (
          <Card
            key={name}
            className="relative mt-8 flex flex-col items-center justify-center bg-muted/50"
          >
            <CardHeader className="mt-8 flex items-center justify-center pb-2">
              <Image
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 aspect-square size-24 rounded-full object-cover"
                width={96}
                height={96}
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ socialNetworkName, url }) => (
                <div key={socialNetworkName}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className="sr-only">{socialNetworkName} icon</span>
                    {socialIcon(socialNetworkName)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
