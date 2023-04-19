import React from 'react'
import { Binoculars } from "../../../assets/images/icons/Binoculars";
import { DeliveryBox } from "../../../assets/images/icons/DeliveryBox";
import { DocumentIcon } from "../../../assets/images/icons/DocumentIcon";
import { UsersIcon } from "../../../assets/images/icons/UsersIcon";
import { CardDropdownData } from "./CardDropdown.types";

export const cardDataDropdown:CardDropdownData[] = [
    {
      title: 'Convert',
      description: 'Learn about your.',
      image: <UsersIcon />,
      route: '/convert',
    },
    {
      title: 'Team dashboard',
      description: 'Monitor your metrics.',
      image: <Binoculars />,
      route: '/dashboard',
    },
    {
      title: 'Limitless segmentation',
      description: 'Surface hidden trends.',
      image: <DocumentIcon />,
      route: '/limitless',
    },
    {
      title: 'Group analytics',
      description: 'Measure B2B account health.',
      image: <DeliveryBox />,
      route: '/analytics',
    },
  ]