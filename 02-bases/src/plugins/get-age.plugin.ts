export const getAge = (birthdate: string) => {
	if (!birthdate) throw new Error('birthdate is required');

	return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
