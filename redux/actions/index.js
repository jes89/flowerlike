
const GOOGLE_LGOIN = 'member/GOOGLE_LGOIN';
const SAVE_POLICY_AGREEMENT = 'member/SAVE_POLICY_AGREEMENT';
const SIGN_UP = 'member/SIGN_UP';
const AUTO_LOGIN = 'member/AUTO_LOGIN';

// 액션 생섬함수 정의
export const googleLogin = sUser => ({ type: GOOGLE_LGOIN, sUser });
export const savePolicyAgreeMember = sUser => ({ type: SAVE_POLICY_AGREEMENT, sUser });
export const signUp = sUser => ({ type: SIGN_UP, sUser });
export const autoLogin = sUser => ({ type: AUTO_LOGIN, sUser });


const initialState = {
    uid: null,
    email: null,
    nickNm : null,
    profileImage: null,
    token : null,
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
          uid: sUser.uid,
          nickNm: sUser.nickNm,
          email: sUser.email,
          device: sUser.device,
          token: sUser.token
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
              profileImage: sUser.profileImage,
              type: sUser.type,
              intro: sUser.intro,
              token : sUser.token,
            };
        case AUTO_LOGIN:
            return {
                ...state,
            };
      default:
        return state;
    }
  }


//   // 액션 타입 정의
// const CHANGE_COLOR = 'counter/CHANGE_COLOR';
// const INCREMENT = 'counter/INCREMENT';
// const DECREMENT = 'counter/DECREMENT';

// // 액션 생섬함수 정의
// export const changeColor = color => ({ type: CHANGE_COLOR, color });
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });

// // **** 초기상태 정의
// const initialState = {
//   color: 'red',
//   number: 0,
// };

// // **** 리듀서 작성
// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return {
//         ...state,
//         color: action.color,
//       };
//     case INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }