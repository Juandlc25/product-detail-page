import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Logotype = (props: Props) => (
  <svg
    width="159"
    height="34"
    viewBox="0 0 159 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.776 3.096H6.44L16.568 22.776L16.28 3.096H21.128H21.56V3.528C21.4 3.72 21.288 3.928 21.224 4.152C21.192 4.376 21.176 4.76 21.176 5.304V33H16.136L5.672 12.024V33H0.776V3.096ZM36.008 33.528C34.408 33.528 32.92 33.272 31.544 32.76C30.2 32.248 29.016 31.512 27.992 30.552C27 29.56 26.232 28.344 25.688 26.904C25.144 25.464 24.872 23.832 24.872 22.008C24.872 20.152 25.144 18.488 25.688 17.016C26.232 15.544 26.968 14.296 27.896 13.272C28.856 12.248 29.976 11.48 31.256 10.968C32.536 10.424 33.912 10.152 35.384 10.152C36.696 10.152 37.928 10.376 39.08 10.824C40.232 11.272 41.24 11.96 42.104 12.888C43 13.784 43.704 14.92 44.216 16.296C44.728 17.64 44.984 19.208 44.984 21C44.984 21.32 44.968 21.704 44.936 22.152C44.936 22.6 44.92 22.984 44.888 23.304H30.104C30.168 24.36 30.376 25.272 30.728 26.04C31.08 26.776 31.544 27.384 32.12 27.864C32.696 28.344 33.336 28.712 34.04 28.968C34.744 29.192 35.48 29.304 36.248 29.304C36.92 29.304 37.56 29.24 38.168 29.112C38.808 28.984 39.4 28.76 39.944 28.44C40.52 28.12 41.064 27.704 41.576 27.192L44.36 29.88C43.656 30.712 42.856 31.416 41.96 31.992C41.096 32.536 40.152 32.92 39.128 33.144C38.136 33.4 37.096 33.528 36.008 33.528ZM30.2 19.224H39.704C39.704 18.456 39.592 17.768 39.368 17.16C39.176 16.552 38.888 16.04 38.504 15.624C38.12 15.208 37.64 14.904 37.064 14.712C36.52 14.488 35.88 14.376 35.144 14.376C34.536 14.376 33.944 14.472 33.368 14.664C32.824 14.824 32.328 15.112 31.88 15.528C31.432 15.944 31.064 16.456 30.776 17.064C30.488 17.672 30.296 18.392 30.2 19.224ZM60.008 33.528C58.408 33.528 56.92 33.272 55.544 32.76C54.2 32.248 53.016 31.512 51.992 30.552C51 29.56 50.232 28.344 49.688 26.904C49.144 25.464 48.872 23.832 48.872 22.008C48.872 20.152 49.144 18.488 49.688 17.016C50.232 15.544 50.968 14.296 51.896 13.272C52.856 12.248 53.976 11.48 55.256 10.968C56.536 10.424 57.912 10.152 59.384 10.152C60.696 10.152 61.928 10.376 63.08 10.824C64.232 11.272 65.24 11.96 66.104 12.888C67 13.784 67.704 14.92 68.216 16.296C68.728 17.64 68.984 19.208 68.984 21C68.984 21.32 68.968 21.704 68.936 22.152C68.936 22.6 68.92 22.984 68.888 23.304H54.104C54.168 24.36 54.376 25.272 54.728 26.04C55.08 26.776 55.544 27.384 56.12 27.864C56.696 28.344 57.336 28.712 58.04 28.968C58.744 29.192 59.48 29.304 60.248 29.304C60.92 29.304 61.56 29.24 62.168 29.112C62.808 28.984 63.4 28.76 63.944 28.44C64.52 28.12 65.064 27.704 65.576 27.192L68.36 29.88C67.656 30.712 66.856 31.416 65.96 31.992C65.096 32.536 64.152 32.92 63.128 33.144C62.136 33.4 61.096 33.528 60.008 33.528ZM54.2 19.224H63.704C63.704 18.456 63.592 17.768 63.368 17.16C63.176 16.552 62.888 16.04 62.504 15.624C62.12 15.208 61.64 14.904 61.064 14.712C60.52 14.488 59.88 14.376 59.144 14.376C58.536 14.376 57.944 14.472 57.368 14.664C56.824 14.824 56.328 15.112 55.88 15.528C55.432 15.944 55.064 16.456 54.776 17.064C54.488 17.672 54.296 18.392 54.2 19.224ZM81.848 33.528C80.6 33.528 79.416 33.288 78.296 32.808C77.208 32.328 76.232 31.592 75.368 30.6C74.504 29.608 73.816 28.376 73.304 26.904C72.824 25.432 72.584 23.704 72.584 21.72C72.584 19.8 72.824 18.12 73.304 16.68C73.784 15.208 74.44 13.992 75.272 13.032C76.136 12.04 77.128 11.304 78.248 10.824C79.368 10.344 80.584 10.104 81.896 10.104C82.632 10.104 83.336 10.2 84.008 10.392C84.712 10.584 85.336 10.872 85.88 11.256C86.456 11.608 86.92 12.104 87.272 12.744V0.792H92.6H93.08V1.224C92.888 1.416 92.76 1.624 92.696 1.848C92.664 2.072 92.648 2.456 92.648 3L92.6 30.024C92.6 30.536 92.632 31.032 92.696 31.512C92.76 31.992 92.904 32.488 93.128 33H87.8C87.64 32.648 87.528 32.36 87.464 32.136C87.4 31.912 87.352 31.688 87.32 31.464C87.32 31.208 87.32 30.904 87.32 30.552C86.936 31.224 86.456 31.784 85.88 32.232C85.304 32.68 84.68 33 84.008 33.192C83.336 33.416 82.616 33.528 81.848 33.528ZM82.76 29.16C83.496 29.16 84.136 29.016 84.68 28.728C85.256 28.408 85.72 27.944 86.072 27.336C86.456 26.728 86.728 25.96 86.888 25.032C87.08 24.072 87.176 22.984 87.176 21.768C87.176 20.104 87.016 18.728 86.696 17.64C86.376 16.52 85.88 15.688 85.208 15.144C84.536 14.6 83.672 14.328 82.616 14.328C81.88 14.328 81.208 14.504 80.6 14.856C79.992 15.176 79.496 15.656 79.112 16.296C78.728 16.936 78.424 17.704 78.2 18.6C78.008 19.496 77.912 20.504 77.912 21.624C77.912 23.192 78.12 24.536 78.536 25.656C78.984 26.776 79.576 27.64 80.312 28.248C81.048 28.856 81.864 29.16 82.76 29.16ZM105.176 33.576C104.28 33.576 103.432 33.448 102.632 33.192C101.832 32.968 101.112 32.616 100.472 32.136C99.832 31.624 99.272 30.984 98.792 30.216C98.344 29.448 97.992 28.536 97.736 27.48C97.48 26.392 97.352 25.16 97.352 23.784V10.68H102.824V23.784C102.824 24.776 102.904 25.624 103.064 26.328C103.224 27 103.464 27.56 103.784 28.008C104.104 28.424 104.472 28.728 104.888 28.92C105.336 29.112 105.8 29.208 106.28 29.208C106.952 29.208 107.56 29.096 108.104 28.872C108.68 28.616 109.16 28.248 109.544 27.768C109.96 27.288 110.28 26.696 110.504 25.992C110.728 25.256 110.84 24.392 110.84 23.4V10.68H116.264V29.448C116.264 30.152 116.28 30.792 116.312 31.368C116.376 31.912 116.52 32.456 116.744 33H111.8C111.64 32.68 111.528 32.36 111.464 32.04C111.4 31.72 111.352 31.4 111.32 31.08C111.32 30.728 111.32 30.408 111.32 30.12C110.968 30.664 110.568 31.16 110.12 31.608C109.672 32.024 109.176 32.376 108.632 32.664C108.12 32.952 107.56 33.176 106.952 33.336C106.376 33.496 105.784 33.576 105.176 33.576ZM131.432 33.528C130.088 33.528 128.792 33.4 127.544 33.144C126.296 32.92 125.144 32.552 124.088 32.04C123.032 31.496 122.056 30.808 121.16 29.976L123.56 25.56L123.752 25.176L124.136 25.416C124.232 25.64 124.328 25.896 124.424 26.184C124.52 26.44 124.76 26.744 125.144 27.096C125.944 27.768 126.856 28.296 127.88 28.68C128.904 29.064 130.12 29.256 131.528 29.256C132.424 29.256 133.176 29.16 133.784 28.968C134.424 28.744 134.904 28.456 135.224 28.104C135.576 27.72 135.752 27.288 135.752 26.808C135.752 26.424 135.656 26.088 135.464 25.8C135.272 25.512 134.968 25.256 134.552 25.032C134.136 24.808 133.592 24.584 132.92 24.36C132.248 24.104 131.448 23.832 130.52 23.544C128.888 23.128 127.464 22.616 126.248 22.008C125.064 21.368 124.152 20.6 123.512 19.704C122.872 18.808 122.552 17.768 122.552 16.584C122.552 15.336 122.904 14.232 123.608 13.272C124.344 12.312 125.368 11.56 126.68 11.016C127.992 10.44 129.544 10.152 131.336 10.152C132.264 10.152 133.144 10.232 133.976 10.392C134.808 10.52 135.592 10.728 136.328 11.016C137.096 11.272 137.8 11.624 138.44 12.072C139.112 12.488 139.736 12.984 140.312 13.56L137.672 17.256L137.336 17.64L137 17.352C136.968 17.096 136.888 16.856 136.76 16.632C136.664 16.376 136.424 16.072 136.04 15.72C135.4 15.24 134.664 14.888 133.832 14.664C133.032 14.44 132.232 14.328 131.432 14.328C130.344 14.328 129.4 14.504 128.6 14.856C127.832 15.208 127.448 15.752 127.448 16.488C127.448 16.904 127.624 17.288 127.976 17.64C128.328 17.96 128.904 18.28 129.704 18.6C130.536 18.888 131.624 19.208 132.968 19.56C134.76 20.04 136.216 20.6 137.336 21.24C138.488 21.848 139.32 22.584 139.832 23.448C140.376 24.312 140.648 25.32 140.648 26.472C140.648 27.72 140.296 28.888 139.592 29.976C138.888 31.064 137.848 31.928 136.472 32.568C135.128 33.208 133.448 33.528 131.432 33.528Z"
      fill="#191919"
    />
    <path
      d="M154.472 33.576C153.448 33.576 152.584 33.224 151.88 32.52C151.176 31.816 150.824 30.968 150.824 29.976C150.824 28.984 151.176 28.136 151.88 27.432C152.584 26.728 153.448 26.376 154.472 26.376C155.464 26.376 156.312 26.728 157.016 27.432C157.72 28.136 158.072 28.984 158.072 29.976C158.072 30.968 157.72 31.816 157.016 32.52C156.312 33.224 155.464 33.576 154.472 33.576Z"
      fill="#E73C17"
    />
  </svg>
);
export default Logotype;