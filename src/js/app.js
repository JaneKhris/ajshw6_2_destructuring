export default function getAttackTypes({ special: typesArray }) {
  const result = [];
  typesArray.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    result.push({
      id,
      name,
      icon,
      description,
    });
  });
  return result;
}
