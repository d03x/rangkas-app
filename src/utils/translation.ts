import { useTranslation } from "react-i18next";

const _ = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};

export {
    _
}