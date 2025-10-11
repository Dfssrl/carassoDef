import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';

interface CardsProps {
    typology: string;
    when: string;
    icon: React.ElementType;
    numberTypology: number;
};

const mockCards: CardsProps[] = [
    {
        typology: "Chiamate",
        when: "Oggi",
        icon: LocalPhoneOutlinedIcon,
        numberTypology: 5
    },
    {
        typology: "Chiamate",
        when: "Questo mese",
        icon: SettingsPhoneOutlinedIcon,
        numberTypology: 10
    },
    {
        typology: "Appuntamenti",
        when: "Oggi",
        icon: StickyNote2OutlinedIcon,
        numberTypology: 2
    },
    {
        typology: "Appuntamenti",
        when: "Questo mese",
        icon: BackupTableOutlinedIcon,
        numberTypology: 8
    }
];

export { mockCards };