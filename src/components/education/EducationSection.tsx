import { EducationItem } from './EducationItem';
import { EducationData, EducationItemData } from './education.data';

export const EducationSection: React.FC = () => {
    const educationData = EducationData

    return (
        <>
            {
                educationData.slice().sort((a, b) => a.order - b.order).map(({ order, name, icon, cert, description, isLocalFile }: EducationItemData) => {
                    return (
                        <EducationItem
                            key={order}
                            name={name}
                            description={description}
                            cert={cert}
                            icon={icon}
                            isLocalFile={isLocalFile}
                            order={order} />
                    );
                })
            }

        </>
    )
}
