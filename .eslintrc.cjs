// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		// 消除对 // @ts-ignore 的提示
		'@typescript-eslint/ban-ts-comment': 'off',
		// 消除ts定义interface时的提示 An empty interface is equivalent to `{}`
		'@typescript-eslint/no-empty-interface': 'off',
		// 关闭React对应的 ESLint 规则，在编写组件时不用显示引入React了
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		// 关闭 'children' is missing in props validationeslintreact/prop-types 的提示
		'react/prop-types': 'off',
		// 关闭空函数体的提示 Unexpected empty arrow function.
		'@typescript-eslint/no-empty-function': 'off',
		// 关闭类型指定为any的提示 Unexpected any. Specify a different type.
		'@typescript-eslint/no-explicit-any': 'off'
	}
}
