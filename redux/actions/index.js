
const GOOGLE_LGOIN = 'member/GOOGLE_LGOIN';
const SAVE_POLICY_AGREEMENT = 'member/SAVE_POLICY_AGREEMENT';
const SIGN_UP = 'member/SIGN_UP';
const AUTO_LOGIN = 'member/AUTO_LOGIN';

// 액션 생섬함수 정의
// export const googleLogin = sUser => ({ type: GOOGLE_LGOIN, sUser });
// export const savePolicyAgreeMember = sUser => ({ type: SAVE_POLICY_AGREEMENT, sUser });
export const signUp = sUser => ({ type: SIGN_UP, sUser });
export const autoLogin = sUser => ({ type: AUTO_LOGIN, sUser });


const initialState = {
    userId: null,
    email: null,
    nickNm : null,
    profile: null,
    accessToken: null,
    pushToken: null,
    refreshToken: null,
    type: null,
    device: null,
    intro: null,
    isServiceAgree : false,
    isPrivacyAgree: false,
    isLocationAgree: false,
  };

export default function sUser(state = initialState, action) {

  const { sUser } = action;

    switch (action.type) {
      case GOOGLE_LGOIN:
        return {
          ...state,
          userId: sUser.userId,
          nickNm: sUser.nickNm,
          email: sUser.email,
          device: sUser.device,
          accessToken: sUser.accessToken,
          pushToken: sUser.pushToken,
          refreshToken: sUser.refreshToken,
        };
      case SAVE_POLICY_AGREEMENT:
        return {
          ...state,
          isServiceAgree: sUser.isServiceAgree,
          isPrivacyAgree: sUser.isPrivacyAgree,
        };
        case SIGN_UP:
            return {
              ...state,
              userId: sUser.userId,
              nickNm: sUser.nickNm,
              email: sUser.email,
              accessToken: sUser.accessToken,
              pushToken: sUser.pushToken,
              refreshToken: sUser.refreshToken,
              profile: sUser.profile,
              type: sUser.type,
              device: sUser.device,
            };
        case AUTO_LOGIN:
            return {
              ...state,
              userId: sUser.userId,
              nickNm: sUser.nickNm,
              email: sUser.email,
              accessToken: sUser.accessToken,
              pushToken: sUser.pushToken,
              refreshToken: sUser.refreshToken,
              profile: sUser.profile,
              type: sUser.type,
              device: sUser.device,
              intro: sUser.intro,
            };
      default:
        return state;
    }
}