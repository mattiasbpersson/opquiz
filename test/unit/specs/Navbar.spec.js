import Navbar from '@/Navbar'
import { shallow } from '@vue/test-utils'

describe('Navbar', () => {
  it('should have login button', () => {
    const wrapper = shallow(Navbar)
    const loginBtn = wrapper.find('.login-btn')
    expect(loginBtn.exists()).toBe(true)
  })
})
