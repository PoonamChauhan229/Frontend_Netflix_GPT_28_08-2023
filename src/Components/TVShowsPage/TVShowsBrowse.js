import { useSelector } from "react-redux";
import useTVShows from "../../hooks/useTvShows";
import MainContainer from "../HomePage/MainContainer/MainContainer";
import { ProfileNavbar } from "../Navbar_ProfilePage/ProfileNavbar";
import TVShowsSecondaryContainer from "./TVShowsSecondaryContainer";
import Loader from "../Loader";

const TVShowsBrowse = () => {
  useTVShows();
  const tvseries = useSelector((store) => store.tvSeries?.popularTvSeries);
  //console.log(tvseries)
  return (
    <>
      <ProfileNavbar />
      {!tvseries ? (
        <Loader />
      ) : (
        <div className="relative">
          <MainContainer movies={tvseries} />
          <TVShowsSecondaryContainer />
        </div>
      )}
    </>
  );
};
export default TVShowsBrowse;
