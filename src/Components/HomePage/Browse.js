import { useSelector } from 'react-redux';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';
import useHomeAll from '../../hooks/useHomeAll';
import GptSearch from '../GPTSearchPage/GptSearch';
import { ProfileNavbar } from '../Navbar_ProfilePage/ProfileNavbar';
import LoaderBrowse from '../LoaderPage/LoaderBrowse';

const Browse = () => {
  useHomeAll();
  const allDataPages = useSelector((store) => store.allDataPages?.page1);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <ProfileNavbar />
      {allDataPages ? (
        showGptSearch ? (
          <GptSearch />
        ) : (
          <div className='relative'>
            <MainContainer movies={allDataPages} />
            <SecondaryContainer />
          </div>
        )
      ) : (
        <LoaderBrowse />
      )}
    </>
  );
};

export default Browse;
