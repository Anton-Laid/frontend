import SocialBtn from './SocialBtn';
import imgY from '../../assets/image/icon40/yandex.svg';
import imgVk from '../../assets/image/icon40/vk.svg';

export default {
  title: 'icon 40px/SocialBtn',
  component: SocialBtn,
};

const Template = (arg) => <SocialBtn {...arg} />;

export const Yandex = Template.bind({});
export const Vk = Template.bind({});

Yandex.args = {
  img: imgY,
};

Vk.args = {
  img: imgVk,
};
