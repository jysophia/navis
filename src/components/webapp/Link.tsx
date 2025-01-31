import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';

// Reference: https://www.youtube.com/watch?v=I2NNxr3WPDo
type Props = {
    page: SelectedPage;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >Link</AnchorLink>
  )
}

export default Link