import { IconProps } from "@/shared/icons";

export const ProfileIcon: React.FC<IconProps> = ({
  fill = "black",
  ...props
}) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
      <circle cx="18" cy="18" r="17.5" stroke={fill} />
      <circle cx="18" cy="13" r="4" fill={fill} />
      <rect x="9" y="19" width="18" height="8" rx="4" fill={fill} />
    </svg>
  );
};
