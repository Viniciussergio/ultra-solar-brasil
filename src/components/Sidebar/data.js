import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Quem Somos',
    path: '/sobre-a-ultra-solar',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Energia Solar',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Em andamento',
        path: '/energia-solar/reports1',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Guia Solar',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Em andamento',
        path: '/guia-solar/reports1',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Instalações para',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Residências',
        path: '/instalacoes/residencia',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Empresas',
        path: '/instalacoes/empresa',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Propriedades Rurais',
        path: '/instalacoes/rural',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Entre em Contato',
    path: '/contato',
    icon: <FaIcons.FaCartPlus />,
  },
];
