import Image from "@/styles/image/Image.jsx";
import BookingDetailsCard from "@/pages/booking/components/booking-details-card/BookingDetailsCard.jsx";
import images from "@/assets/index.js";
import "@/pages/booking/components/booking-details/BookingDetails.style.scss";

export default function BookingDetails() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.movieDetails.data);
  // const loading = useSelector((state) => state.movieDetails.loading);
  // const error = useSelector((state) => state.movieDetails.error);
  //
  // const { id } = useParams();
  //
  // useEffect(() => {
  //   dispatch(actGetScreeningsByFilmId(id));
  // }, [dispatch, id]);
  //
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (error) {
  //   return <ErrorLayout errorMessage={error.message} />;
  // }

  return (
    <div className="booking-details">
      <BookingDetailsCard />
      <Image className="booking-details__background" src={images.noTitlePlaceholder} />
    </div>
  );
}
