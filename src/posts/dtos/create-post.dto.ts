import { PostType } from '../enums/postType.enums';
import { PostStatus } from '../enums/postStatus.enums';
import { IsArray, IsDataURI, IsDate, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionsDto } from './create-post-metaOptions.dto';

export class CreatePostDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsEnum(PostType)
    @IsNotEmpty()
    postType: PostType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'Slug must be in kebab-case format'})
    slug: string;

    @IsString()
    @IsEnum(PostStatus)
    @IsNotEmpty()
    status: PostStatus;

    @IsString()
    @IsOptional()
    content?: string;

    @IsJSON()
    @IsOptional()
    schema?: string;

    @IsUrl()
    @IsOptional()
    featuredImageUrl?: string;

    @IsISO8601()// Example: 2023-10-01T12:00:00Z
    @IsOptional()
    publishedOn?: Date; // Example: 2023-10-01T12:00:00Z

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];

    @ValidateNested({ each: true })
    @IsOptional()
    @IsArray()
    @Type(() => CreatePostMetaOptionsDto) // Ensure that the CreatePostMetaOptionsDto is properly imported
    metaOptions?: CreatePostMetaOptionsDto[];
}