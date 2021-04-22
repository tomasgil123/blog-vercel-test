import {
  TYPESCRIPT,
  TESTING,
  VUE,
  VUE_SUSPENSE,
  PLAYWRIGHT,
  REACT,
  NEXTJS,
  RENDER_PROPS,
  MOCK_SERVICE_WORKER,
} from 'src/constants/tags'
import { colors } from 'src/tokens'

export const getTagsColor = (tag: string): string => {
  switch (tag) {
    case TYPESCRIPT:
      return `${colors.base.darksLateBlue}`
    case REACT:
      return `${colors.base.deepSkyBlue}`
    case NEXTJS:
      return `${colors.base.deepSkyBlue_shade1}`
    case RENDER_PROPS:
      return `${colors.base.deepSkyBlue_shade2}`
    case VUE:
      return `${colors.text.success}`
    case VUE_SUSPENSE:
      return `${colors.text.success_shade1}`
    case TESTING:
      return `${colors.base.gold}`
    case PLAYWRIGHT:
      return `${colors.base.gold_shade1}`
    case MOCK_SERVICE_WORKER:
      return `${colors.base.gold_shade2}`
    default:
      return `${colors.base.tomato}`
  }
}

export const getTagsTextColor = (tag: string): string => {
  if (tag === TESTING || tag === PLAYWRIGHT || tag === MOCK_SERVICE_WORKER) {
    return `${colors.text.primary}`
  } else {
    return `${colors.base.white}`
  }
}

export const getMainTags = [TYPESCRIPT, REACT, VUE, TESTING]
