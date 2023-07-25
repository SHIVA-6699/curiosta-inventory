import Button from "@components/Button";
import Typography from "@components/Typography";
import { useSignal } from "@preact/signals";

const BottomNavbar = () => {
  const activeIndex = useSignal<number>(0);

  const bottomNavbarItems = [
    {
      title: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29 25"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M14.5 3.95588L21.75 10.5735V22.0588H18.85V13.2353H10.15V22.0588H7.25V10.5735L14.5 3.95588ZM14.5 0L0 13.2353H4.35V25H13.05V16.1765H15.95V25H24.65V13.2353H29L14.5 0Z" />
        </svg>
      ),
    },
    {
      title: "Help center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 29"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M16.3437 20.2275C16.3437 21.0613 15.7033 21.75 14.8333 21.75C13.9875 21.75 13.3108 21.0733 13.3108 20.2275C13.3108 19.3696 13.9875 18.7171 14.8333 18.7171C15.6912 18.7171 16.3437 19.3817 16.3437 20.2275ZM14.8212 7.25C12.6825 7.25 11.2204 8.63958 10.6766 10.2587L12.6583 11.0925C12.9241 10.2829 13.5525 9.30417 14.8333 9.30417C16.7908 9.30417 17.1775 11.1408 16.4887 12.1196C15.8362 13.05 14.7125 13.6783 14.1204 14.7296C13.6491 15.5633 13.7458 16.53 13.7458 17.1221H15.945C15.945 15.9983 16.0296 15.7688 16.2108 15.4183C16.6821 14.5483 17.5521 14.1375 18.4704 12.7963C19.2921 11.5879 18.9779 9.94458 18.4462 9.07458C17.83 8.05958 16.6096 7.25 14.8212 7.25ZM23.2916 6.04167H6.37498V22.9583H23.2916V6.04167ZM23.2916 3.625C24.6208 3.625 25.7083 4.7125 25.7083 6.04167V22.9583C25.7083 24.2875 24.6208 25.375 23.2916 25.375H6.37498C5.04581 25.375 3.95831 24.2875 3.95831 22.9583V6.04167C3.95831 4.7125 5.04581 3.625 6.37498 3.625H23.2916Z" />
        </svg>
      ),
    },
    {
      title: "Others",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 27"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M15.3334 7.36364V23.2814L10.1878 21.06L9.22224 20.6427L8.25669 21.06L3.11113 23.2814V7.36364H15.3334ZM20.2222 0H7.9878C6.64335 0 5.55558 1.10455 5.55558 2.45455H17.7778C19.1222 2.45455 20.2222 3.55909 20.2222 4.90909V20.8636L22.6667 22.0909V2.45455C22.6667 1.10455 21.5667 0 20.2222 0ZM15.3334 4.90909H3.11113C1.76669 4.90909 0.666687 6.01364 0.666687 7.36364V27L9.22224 23.3182L17.7778 27V7.36364C17.7778 6.01364 16.6778 4.90909 15.3334 4.90909Z" />
        </svg>
      ),
    },
    {
      title: "Notifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 29"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M11.5 29C13.0813 29 14.375 27.6615 14.375 26.0256H8.625C8.625 27.6615 9.91875 29 11.5 29ZM20.125 20.0769V12.641C20.125 8.07539 17.7819 4.25333 13.6562 3.24205V2.23077C13.6562 0.99641 12.6931 0 11.5 0C10.3069 0 9.34375 0.99641 9.34375 2.23077V3.24205C5.2325 4.25333 2.875 8.06051 2.875 12.641V20.0769L0 23.0513V24.5385H23V23.0513L20.125 20.0769ZM17.25 21.5641H5.75V12.641C5.75 8.95282 7.92063 5.94872 11.5 5.94872C15.0794 5.94872 17.25 8.95282 17.25 12.641V21.5641Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 flex justify-center items-center w-full bg-primary-700 rounded">
      {bottomNavbarItems.map((item, index) => (
        <Button
          key={index}
          type="button"
          variant="icon"
          className={`flex-col items-center ${
            activeIndex.value === index ? "text-white" : "text-primary-400"
          } `}
          onClick={() => (activeIndex.value = index)}
        >
          {item.icon}
          <Typography size="body2/normal">{item.title}</Typography>
        </Button>
      ))}
    </div>
  );
};

export default BottomNavbar;