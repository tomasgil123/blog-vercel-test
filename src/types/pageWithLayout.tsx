import { NextPage } from 'next'
import LayoutMain from 'src/components/layout/mainLayout'
import LayoutPost from 'src/components/layout/postlayout'

type PageWithMainLayoutType = NextPage & { layout: typeof LayoutMain }

type PageWithPostLayoutType = NextPage & { layout: typeof LayoutPost }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
