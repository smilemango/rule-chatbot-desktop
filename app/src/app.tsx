import * as React from 'react'
import { ConfigProvider } from 'antd'
import ko_KR from 'antd/es/locale/ko_KR'

import { AppRouter, AppLayout } from '@/src/components'

import routes from './auto-routes'

interface AppProps {
  createConfig: CreateConfig
}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <ConfigProvider locale={ko_KR}>
        <AppLayout createConfig={this.props.createConfig}>
          <AppRouter routes={routes} store={$store} />
        </AppLayout>
      </ConfigProvider>
    )
  }
}
