import { NextPage } from 'next'
import LayoutMain from 'src/components/layout/mainLayout'
import LayoutPost from 'src/components/layout/postlayout'

type PageWithMainLayout = NextPage & { layout: typeof LayoutMain }

type PageWithPostLayout = NextPage & { layout: typeof LayoutPost }

type PageWithLayout = PageWithMainLayout | PageWithPostLayout

export default PageWithLayout
